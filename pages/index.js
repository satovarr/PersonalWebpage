import Link from "next/link";
import BasicLayout from "../components/BasicLayout";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

const Index = () => (
    <BasicLayout>
        <Profile />
        <Skills />
    </BasicLayout>
);

export default Index;