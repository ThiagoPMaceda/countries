import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Downshift from 'downshift';
import { matchSorter } from 'match-sorter';
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

const SearchCountry: React.FC<IDropDownProps> = () => {
	const { data: countries, status } = useCountries();

	const allCountries: any = countries?.data.map((country: ICountry) => ({
		name: country.name,
		alpha2Code: country.alpha2Code,
	}));

	const getCountries = (value: string) => {
		if (value) {
			return matchSorter(allCountries, value, { keys: ['name'] });
		} else {
			return allCountries;
		}
	};

	const itemToString = (item: { name: string } | null) => {
		return item ? item.name : '';
	};

	return (
		<Downshift itemToString={itemToString}>
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
							<div>
								<input
									{...getInputProps()}
									className='shadow appearance-none px-16 py-2 rounded text-textPrimary placeholder-textPrimary focus:outline-none focus:shadow-outline bg-elements'
									id='search-country'
									type='text'
									placeholder='Search for a country...'
								/>
							</div>
						</div>
						<ul
							className='flex items-center flex-col'
							{...getMenuProps({
								style: {
									height: 300,
									overflowY: 'scroll',
									maxWidth: 321,
								},
							})}
						>
							{isOpen && countries && inputValue?.length
								? getCountries(inputValue).map(
										(country: ICountry, index: number) => (
											<li
												key={index}
												{...getItemProps({
													item: country,
													key: country.alpha2Code,
													index,
												})}
											>
												{country.name}
											</li>
										)
								  )
								: null}
						</ul>
					</form>
				</div>
			)}
		</Downshift>
	);
};

export default SearchCountry;
