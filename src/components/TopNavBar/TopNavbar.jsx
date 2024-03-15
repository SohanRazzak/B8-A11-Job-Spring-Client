import { Navbar, Button, Avatar, Tooltip } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import "./TopNavBar.css";
import useAuth from "../../hooks/useAuth/useAuth";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

export const TopNavbar = () => {
    const { isLoggedIn, logOutUser, user } = useAuth();

    // NavLinks
    const navLinks = (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all_jobs">All Jobs</NavLink>
            {isLoggedIn && (
                <>
                    <NavLink to="/add_job">New Job</NavLink>
                    <NavLink to="/my_jobs">My Jobs</NavLink>
                    <NavLink to="/applied_jobs">Applied Jobs</NavLink>
                </>
            )}
            <NavLink to="/blogs">Blogs</NavLink>
        </>
    );

    // Handling Logut
    const handleLogOut = () => {
        logOutUser();
    };

    return (
        <Navbar fluid={true} className="shadow-sm px-0">
            <ContainerLayout>
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <img
                                src="https://i.ibb.co/pzDmzxs/job-spring.png"
                                alt="keep"
                                width="140"
                                height="60"
                            />
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        {/* NavLinks  */}
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-6 py-5 text-gray-700"
                        >
                            {navLinks}
                        </Navbar.Container>
                        <Navbar.Collapse collapseType="sidebar">
                            {/* NavLinks  */}
                            <Navbar.Container
                                tag="ul"
                                className="flex flex-col gap-4 text-gray-700"
                            >
                                {navLinks}
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-3">
                                <Tooltip
                                    content={user?.displayName}
                                    trigger="hover"
                                    placement="bottom"
                                    animation="duration-300"
                                    style="light"
                                >
                                    <Avatar
                                        shape="circle"
                                        size="md"
                                        img={user?.photoURL}
                                        className="border border-gray-400"
                                    />
                                </Tooltip>
                                <Button
                                    onClick={handleLogOut}
                                    size="sm"
                                    type="primary"
                                    color="success"
                                >
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Link to="/sign_in">
                                <Button
                                    size="sm"
                                    type="primary"
                                    color="success"
                                >
                                    Login
                                </Button>
                            </Link>
                        )}
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </ContainerLayout>
        </Navbar>
    );
};
