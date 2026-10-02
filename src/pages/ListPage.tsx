import axios from "axios";
import { useEffect, useState } from "react";

    interface pitches { 
  id: string;
  name: string;
  price: number;
  location: string;
  type: string;
    }
function ListPage() {
const [pitches, setpitches] = useState<pitches[]>([]);
useEffect(() => {
  axios.get("http://localhost:3000/pitches").then((res) => {
    setpitches(res.data);
  });
}, []);
const deleteis = (id:string) => {
  if (confirm ("xoa ?")) {
    axios.delete (`http://localhost:3000/pitches/${id}`).then(()=> {
      setpitches(pitches.filter((item) => item.id !==id))
    
    });
  }
}
return(
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                gia
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                dia diem
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                loai san
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                hanh dong
              </th>
            </tr>
          </thead>

          <tbody>
            { pitches.map ((pitches,index) => (
            <tr key={pitches.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{index+1}</td>
              <td className="px-4 py-2 border border-gray-300">{pitches.name}</td>
              <td className="px-4 py-2 border border-gray-300">{pitches.price}</td>
              <td className="px-4 py-2 border border-gray-300">{pitches.location}</td>
              <td className="px-4 py-2 border border-gray-300">{pitches.type}</td>
<td className="px-4 py-2 border border-gray-300">
  <button onClick={() => deleteis(pitches.id)}>
    Xóa
  </button>
</td>
            </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
)
}

export default ListPage;
