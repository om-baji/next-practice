import axios from "axios";

async function getData() {
  try {
    await new Promise((r) => setTimeout(r,2000))
    const response = await axios.get("http://localhost:3000/api/user")
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e)
  }


}

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="border p-8 rounded ">
          Name : {data.name}
          <div>
            Email : {data.email}
          </div>

        </div>




      </div>

    </div>
  );
}
