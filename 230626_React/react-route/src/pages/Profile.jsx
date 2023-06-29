import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
	minzyee: {
		id: 1,
		name: "김민지",
		age: 25,
		describtion: "프론트엔드 취업 준비 중 입니다.",
	},

	corgi: {
		id: 2,
		name: "깜찍이",
		age: 26,
		describtion: "아주 귀여운 녀석입니다.",
	},
};

const Profile = () => {
	const { username } = useParams();
	const navigate = useNavigate();
	const profile = ProfileData[username];
	// console.log(ProfileData["corgi"]);

	// console.log(useParams()); // {username: 'minzyee'}
	// console.log("navigate: ", navigate);
	// console.log(username); // minzyee
	// console.log(profile);
	// console.log(profile.name); // name

	if (!profile) {
		return <div>존재하지 않는 유저입니다.</div>;
	}
	return (
		<div>
			<h3>{/* {profile.name}({username})이 무엇을 하는 사람일까요? */}</h3>
			<h3>
				{username}({profile.name})이 무엇을 하는 사람일까요?
			</h3>
			<p>{profile.describtion}</p>
			<button onClick={() => navigate(-1)}>뒤로가기</button>
		</div>
	);
};

export default Profile;
