import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3333/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Register gagal");
        return;
      }

      localStorage.setItem("token", data.data.token);

      alert("Register berhasil!");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <section>
        <form
          className="w-full flex flex-col items-start justify-start text-black p-6"
          onSubmit={handleRegister}
        >
          <h1 className="text-3xl font-bold mb-4 text-start">Register</h1>
          <p className="text-gray-500">Make your account here!</p>

          <input
            type="text"
            name="fullName"
            placeholder="Username"
            onChange={handleChange}
            className="w-[70vw] mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Nomor Handphone"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-4 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full mb-4 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <Button
            type="submit"
            onClick={() => navigate("/login")}
            className="w-full bg-[#607274]"
          >
            Register
          </Button>

          <p className="mt-3 text-gray-500">
            Sudah punya akun?{" "}
            <a href="/login">
              <span className="text-gray-500 hover:text-gray-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Login
              </span>
            </a>{" "}
            Disini
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
