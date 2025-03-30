import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="bg-end flex min-h-screen flex-col items-center bg-[url(images/cics1.png)] bg-[200px] bg-no-repeat p-6 lg:justify-center lg:p-8 bg-[#85B1C3]">
                <header className="fixed top-0 left-0 z-50 flex w-full justify-between border-b border-black bg-[#4076B4] p-5">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                        <div className="flex h-16 items-center justify-between lg:h-[72px]">
                            <div className="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14"></div>
                            <div className="flex items-center justify-end space-x-5">
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-2xl text-white bg-[#4076B4] hover:bg-[#305a8a] hover:border-white transition duration-200"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-2xl text-white bg-[#4076B4] hover:bg-[#305a8a] hover:border-white transition duration-200"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="absolute top-1/2 right-0 max-w-xl -translate-y-1/2 transform text-right lg:max-w-md xl:max-w-lg">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                                College of Information and Computing Sciences Capstone Archiving System
                            </h1>
                            <p className="mt-8 text-base leading-7 font-normal text-white lg:max-w-md lg:pr-16 xl:pr-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu
                                viverra amet.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:hidden">
                        <img
                            className="h-full w-full object-cover"
                            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
                            alt=""
                        />
                    </div>
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="flex w-full items-center justify-end">
                                    <div className="flex w-md items-center justify-center gap-5"></div>
                                </div>
                            </>
                        )}
                    </nav>
                </header>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
