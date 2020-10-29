import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Filters: React.FC = () => {
	return (
		<div className='flex justify-center pt-8'>
			<form>
				<div className='relative'>
					<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
						<button>
							<AiOutlineSearch />
						</button>
					</span>
					<input
						className='shadow appearance-none px-16 py-2 rounded text-textPrimary placeholder-textPrimary focus:outline-none focus:shadow-outline bg-elements'
						id='search-country'
						type='text'
						placeholder='Search for a country...'
					/>
				</div>
			</form>
		</div>
	);
};

export default Filters;
