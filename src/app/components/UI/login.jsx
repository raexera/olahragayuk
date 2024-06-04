
import Head from 'next/head';

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Login
              </h1>
              <form className="space-y-5 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-lime-300 hover:bg-lime-500 text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Login
                  </button>
                </div>
            
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
