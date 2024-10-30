import Image from "next/image";
import React from "react";

export default function loading() {
	return (
		<div className="w-full h-screen relative bg-[#FF99CC]">
			<div
				className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white flex flex-col justify-center items-center">
				<Image
					alt="Loading gif"
					src="/images/loading.gif"
					width={300}
					height={200}
					className="w-72 h-60 object-cover"
				/>
				<div className="classic-2 mt-2">Chờ xíu nhe...</div>
			</div>
		</div>
	);
}
