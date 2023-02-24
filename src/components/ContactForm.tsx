import { useForm } from 'react-hook-form';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
		console.log(errors);
		reset();
	};

	const isInvalidForm = () => {
		if (errors.name || errors.email || errors.message) {
			return true;
		}
	};

	return (
		<section className='px-4 py-10 md:px-0 lg:grid lg:grid-cols-[30%_70%] gap-5'>
			<h2
				className='
						text-black-custom font-bold text-[40px] leading-[48px] tracking-[-1.2px] mt-[3rem] mb-4
						md:text-[56px] md:leading-[56px] md:mt-[3rem] lg:mt-0
					'>
				Connect with us
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className='
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-black-custom
            placeholder:font-bold placeholder:text-dark-gray text-xl
            '
					type='text'
					placeholder='Name'
					{...register('name', {
						required: true,
						minLength: 3,
					})}
				/>
				<input
					className='
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-black-custom
            placeholder:font-bold placeholder:text-dark-gray text-xl
            '
					type='text'
					placeholder='Email Address'
					{...register('email', {
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				<textarea
					className='
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-black-custom
            placeholder:font-bold placeholder:text-dark-gray text-xl
            max-h-[8rem]
            '
					placeholder='Your Message'
					rows={1}
					{...register('message', {
						required: true,
					})}
				/>
				<div
					className={`flex justify-end ${
						isInvalidForm() ? 'justify-between' : 'justify-end'
					}`}>
					{isInvalidForm() && (
						<span className='text-red font-bold'>Complete all the fields!</span>
					)}
					<button className='bg-dark-blue p-8'>
						<img src='src/assets/icons/icon-arrow.svg' alt='' />
					</button>
				</div>
			</form>
		</section>
	);
};
