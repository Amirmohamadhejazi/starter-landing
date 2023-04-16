import "./style.scss"

const Account = ()=>{
    return <>
        <div className="flex flex-col gap-10">
            <div className="flex  flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-4/12">
                    <p className="text-2xl font-SemiBold">General</p>
                    <p className="text-lg font-Bold text-gray-500">Change general settings for your account.</p>
                </div>
                <div className="flex flex-col   basis-8/12   rounded-lg border-2 border-gray-200 p-12">
                    <div className="flex  flex-col lg:flex-row gap-16">
                        <div className="basis-5/12">
                            <label className={`block text-gray-700 font-bold  mb-2`}  htmlFor="name">Full Name</label>
                            <input className="custom-Input  appearance-none "
                                   type="text"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="John doe"/>

                        </div>
                        <div className=" basis-5/12">
                            <label className={`block text-gray-700 font-bold  mb-2`}  htmlFor="name">Your linkProfile link</label>
                            <input className="custom-Input  appearance-none "
                                   type="text"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="https://linkProfile/steph"/>

                        </div>

                    </div>
                    <p className="text-lg font-Regular mt-6">Your email is stephaniemark@example.com <span className="text-teal-500">Change email</span></p>
                </div>
            </div>

            <hr/>

            <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-4/12">
                    <p className="text-2xl font-SemiBold">Preferred Language</p>
                    <p className="text-lg font-Bold text-gray-500">This is your accounts language, not your linkProfile website.</p>
                </div>
                <div className="flex flex-col  basis-8/12   rounded-lg border-2 border-gray-200 p-12">
                    <label className={`block text-gray-700 font-bold  mb-2`}  htmlFor="name">Languages</label>
                    <select className="select  border-2 w-full border-gray-200  ">
                        <option selected>English</option>
                        <option>persian</option>
                        <option>russian</option>
                        <option>indian</option>
                        <option>turkey</option>
                    </select>
                </div>
            </div>

            <hr/>

            <div className="flex  flex-col lg:flex-row gap-2 mb-5">
                <div className="flex flex-col basis-4/12">
                    <p className="text-2xl font-SemiBold">Timezone</p>
                </div>
                <div className="flex flex-col  basis-8/12   rounded-lg border-2 border-gray-200 p-12">
                            <label className={`block text-gray-700 font-bold  mb-2`}  htmlFor="name">Timezone</label>
                            <select className="select  border-2 w-full border-gray-200  ">
                                <option selected>(GMT+02:00) Cario</option>
                                <option>ir</option>
                                <option>usa</option>
                            </select>
                </div>
            </div>
        </div>
    </>
}

export default Account