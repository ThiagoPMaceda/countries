import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Downshift, { useCombobox, UseComboboxInterface } from 'downshift';
import { useCountries } from '../../hooks/useCountries';

type OptionType = {
	value?: string;
};

interface IDropDownProps {
	options?: OptionType[];
	onChange?: (selectedItem: string) => void;
}

interface ICountry {
	name: string;
	alpha2Code: string;
}

const SearchCountry: React.FC<IDropDownProps> = (): any => {
	const { data: countries, status } = useCountries();

	return (
		<Downshift>
			{({
				getToggleButtonProps,
				getInputProps,
				getMenuProps,
				getItemProps,
				inputValue,
				isOpen,
			}) => (
				<div className='flex justify-center pt-8'>
					<form>
						<div className='relative'>
							<span className='absolute inset-y-0 flex items-center pl-8'>
								<button {...getToggleButtonProps()}>
									<AiOutlineSearch
										size={20}
										className='text-textPrimary'
									/>
								</button>
							</span>
							<input
								{...getInputProps()}
								className='shadow appearance-none px-16 py-2 rounded text-textPrimary placeholder-textPrimary focus:outline-none focus:shadow-outline bg-elements'
								id='search-country'
								type='text'
								placeholder='Search for a country...'
							/>
							<ul {...getMenuProps()}>
								{isOpen && countries && inputValue?.length
									? countries.data
											.filter(
												(country: ICountry) =>
													!inputValue ||
													country.name.includes(
														inputValue
													)
											)
											.map(
												(
													country: ICountry,
													index: number
												) => (
													<li
														key={index}
														{...getItemProps({
															item: country,
															key:
																country.alpha2Code,
															index,
														})}
													>
														{country.name}
													</li>
												)
											)
									: null}
							</ul>
						</div>
					</form>
				</div>
			)}
		</Downshift>
	);
};

export default SearchCountry;
