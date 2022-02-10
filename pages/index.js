import Link from "next/link";
import BasicLayout from "../components/BasicLayout";
import { skills, experiences } from "../profile";

const Index = () => (
    <BasicLayout>
        {/** Header card **/}

        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="portfimg.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Santiago Tovar</h1>
                            <h3>FullStack engineer</h3>
                            <p>texto</p>
                            <a href="hireme">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section **/}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{ skill }</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({title, from, to, description}, i)=>(
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>  
                                ))
                            }
                        </ul>
                        <Link href="/github">
                            <a className="btn btn-light"> know more</a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </BasicLayout>
);

export default Index;