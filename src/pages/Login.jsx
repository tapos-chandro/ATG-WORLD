
const Login = ({toggle, setToggle}) => {


    return (
        <div>

            {
                toggle === true ? <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-10">
                    <div aria-hidden="true" className="fixed inset-0 bg-[#0000006b] transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative rounded-lg  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 rounded-md sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                       
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 id="dialog-title" className="text-base font-semibold text-gray-900">Deactivate account</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-8 p-3 lg:-right-6 right-0 h-4 w-4 flex items-center justify-center rounded-full  bg-white ">
                                  
                                    <button className="rounded-full text-gray-700 text-lg " onClick={() => setToggle(false)}>x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :''


            }
        </div>
    );
};

export default Login;