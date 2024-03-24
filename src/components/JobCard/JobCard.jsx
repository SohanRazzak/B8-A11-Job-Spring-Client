import { Avatar, Badge, Button, Card, Spinner } from "keep-react";
import PropTypes from "prop-types";
import { TbClockExclamation, TbUsersGroup, TbZoomMoney } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const JobCard = ({ job }) => {
    const {user} = useAuth();
    const {
        _id,
        jobTitle,
        company,
        companyLogo,
        deadline,
        salary,
        totalApplicant,
        jobIndustry,
        jobType,
        publisher
    } = job;
    if (job == null) {
        return (
            <div className="h-[360px] border-red-100 border rounded-md grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    const deadlineString = new Date(deadline).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    return (
        <Card>
            <div className="flex gap-3 md:gap-5 items-center px-3 md:px-5 pt-5">
                <Avatar img={companyLogo} size="xl" alt={company} />
                <div>
                    <Card.Title>{jobTitle}</Card.Title>
                    <Card.Description>Employer: {company}</Card.Description>
                </div>
            </div>
            <hr />
            {/* Content  */}
            <div className="px-3 pb-3 md:px-5 md:pb-5">
                <span className="flex gap-2 items-center text-gray-700">
                    <TbZoomMoney /> Salary: {salary.min}-{salary.max} dollar{" "}
                    {salary.frequency}
                </span>
                <span className="flex gap-2 items-center text-gray-700">
                    <TbClockExclamation /> Deadline: {deadlineString}
                </span>
                <span className="flex gap-2 items-center text-gray-700">
                    <TbUsersGroup /> Applicant: {totalApplicant}{" "}
                    {totalApplicant > 1 ? "persons" : "person"}
                </span>
                {/* Tags  */}
                <div className="flex gap-2 my-2">
                    <Badge variant="border">{jobType}</Badge>
                    <Badge variant="border">{jobIndustry}</Badge>
                </div>
                {/* View Details Button  */}
                <div className="flex items-center gap-3">
                <Link to={`/job_details/${_id}`}>
                    <Button
                        size="sm"
                        type="primary"
                        color="success"
                        className="mt-3"
                    >
                        View Job
                    </Button>
                </Link>
                {
                    user?.email === publisher && <Link to={`/update_my_job/${_id}`}>
                    <Button
                        size="sm"
                        type="primary"
                        color="error"
                        className="mt-3"
                    >
                        Edit Job Info
                    </Button>
                </Link>
                }
                </div>
            </div>
        </Card>
    );
};

JobCard.propTypes = {
    job: PropTypes.object,
};

export default JobCard;
