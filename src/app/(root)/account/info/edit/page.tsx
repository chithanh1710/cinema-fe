// import { auth } from "@/_libs/auth";
// import DatePicker from "../../../../_components/DatePicker";
// import { getTinhThanhVN } from "@/_libs/service";
// import { Button } from "@/_components/ui/button";
// import { updateUserAction } from "@/_libs/actions";
// import ButtonChangeInfo from "@/_components/ButtonChangeInfo";

// export default async function page() {
//   const session = await auth();
//   const areaAPI = await getTinhThanhVN();
//   const defaultValue = session?.user?.area
//     ? areaAPI.data.find((item: any) => item.name === session?.user?.area).name
//     : "Hồ Chí Minh";
//   return (
//     <form action={updateUserAction}>
//       <h1 className="text-xl font-bold">Thay đổi thông tin cá nhân</h1>
//       <div className="mt-6 space-y-10">
//         <div className="flex flex-col gap-4">
//           <label className="font-semibold text-xl">Giới tính</label>
//           <div className="flex gap-6">
//             <div className="flex gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 id="nam"
//                 defaultChecked={session?.user?.gender === "Nam"}
//                 value="Nam"
//               />
//               <label htmlFor="nam">Nam</label>
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 id="nu"
//                 defaultChecked={session?.user?.gender === "Nữ"}
//                 value="Nữ"
//               />
//               <label htmlFor="nu">Nữ</label>
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 id="khac"
//                 defaultChecked={session?.user?.gender === "Khác"}
//                 value="Khác"
//               />
//               <label htmlFor="khac">Khác</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <label htmlFor="birthday" className="font-semibold text-xl">
//             Ngày sinh
//           </label>
//           <DatePicker birthday={session?.user?.birthday} />
//         </div>
//         <div className="flex flex-col gap-4">
//           <label htmlFor="area" className="font-semibold text-xl">
//             Khu vực
//           </label>
//           <select
//             className="max-w-[340px] py-3 px-3 rounded"
//             name="area"
//             id="area"
//             defaultValue={defaultValue}
//           >
//             {areaAPI.data.map((item: any) => (
//               <option value={item.name} key={item.id}>
//                 {item.full_name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <ButtonChangeInfo />
//       </div>
//     </form>
//   );
// }
