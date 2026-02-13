import { Button } from "@/components/ui/button";

function Register() {
  return (
    <main>
      <section>
        <div className="w-full flex flex-col items-start justify-start text-black p-6">
          <h1 className="text-3xl font-bold mb-4 text-start">Register</h1>
          <p className="text-gray-500">Make your account here!</p>

          <input
            type="text"
            placeholder="Username"
            className="w-[28vw] mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />
          <input
            type="number"
            placeholder="Nomor Handphone"
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <Button className="w-full bg-[#607274]">Login</Button>

          <p className="mt-3 text-gray-500">
            Sudah punya akun?{" "}
            <a href="/login">
              <span className="text-gray-500 hover:text-gray-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Login
              </span>
            </a>{" "}
            Disini
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
