// import intexus from "../Assets/img/intexus.png"
import "../Styles/JobOffers.css"
import { BsBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { BiSolidCool } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";

function JobOffers ( {imagen, vacancy, company, location, salary, vacancies, published, ingles, remoto, capacitaciones, ambiente, flexible} ){
    return(
        <div className="job-container d-flex flex-row align-items-center border border-secondary-subtle rounded my-3">
            <Link to='/JobPage' className="link-JobOffers">
            <img className='logo-company rounded'
                    src={require(`../Assets/img/${imagen}.png`)}
                    alt = {`${imagen}-logo`}
            />
            <div className="info-job-container d-flex flex-column mx-4">
                <div className="d-flex flex-row mb-2 pe-auto">
                    <a href="!#" className='job-name mb-0'>
                      {vacancy}
                    </a>
                    <ul className='skills my-auto'>
                      <li>Sales</li>
                      <li>Coomercial</li>
                      <li>Client</li>
                  </ul>
                </div>
                {/* <div className="company-info d-flex flex-row justify-content-between"> */}
                <div className="container company-info">
                    <div className="row">
                        <div className='company-name col ps-0'>
                            <BsBuildingsFill />
                            <p> 
                                {company}
                            </p>
                        </div>
                        <div className='salary col'>
                            <FaLocationDot />
                            <p>
                                {location}
                            </p>
                        </div>
                        <div className="col">
                            <FaMoneyBill />
                            <p className="text-truncate">
                                {salary}
                            </p>
                        </div>
                        <div className="col ">
                            <IoIosPeople />
                            <p>
                                {vacancies} Vacante
                            </p>
                        </div>
                        <div className=" col">
                            <IoCalendar />
                            <p>
                                Hace {published}
                            </p>
                        </div>
                        <div className="col">
                            <div>
                                <span className="benefit-icon">
                                    {ingles === true ? <MdLanguage className="me-1" /> : null}
                                    {remoto === true ? <FaLocationDot className="me-1" /> : null}
                                    {capacitaciones === true ? <FaBookOpenReader className="me-1"/> : null}
                                    {ambiente === true ? <BiSolidCool className="me-1"/> : null}
                                    {flexible === true ? <BsWatch className="me-1"/> : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export { JobOffers }