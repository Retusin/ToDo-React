import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

const Check = ({ isCompleted }) => {
	return (
		<button
			className={cn(
				`border-2 rounded-lg border-emerald-700 w-6 h-6 mr-3 flex items-center justify-center`,
				{
					'bg-emerald-700': isCompleted,
				}
			)}
		>
			{isCompleted && <BsCheck size={24} className='text-gray-900' />}
		</button>
	)
}

export default Check
