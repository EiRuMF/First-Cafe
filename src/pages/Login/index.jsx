import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login ditekan");

    try {
      const res = await fetch("http://localhost:3333/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          phoneNumber,
          password,
        }),
      });

      console.log("Request terkirim");

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        alert(data.message || "Login gagal");
        return;
      }

      localStorage.setItem("token", data.data.token);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <section>
        <form
          onSubmit={handleLogin}
          className="w-full relative items-start justify-start text-black p-6"
        >
          <h1 className="text-3xl font-bold mb-4 text-start">Login</h1>
          <p className="text-gray-500">Welcome!</p>
          <p className="text-gray-500 mb-3">Enjoy ur coffee</p>

          <input
            type="number"
            placeholder="phone number"
            value={phoneNumber}
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full mb-4 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" className="w-full bg-[#607274]">
            Login
          </Button>

          <p className="mt-3 text-gray-500">
            Belum punya akun?{" "}
            <a href="/register">
              <span className="text-gray-500 hover:text-gray-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                register
              </span>
            </a>{" "}
            Disini
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
