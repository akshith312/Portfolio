import { Card } from "react-bootstrap";

export const ProjectCard = () => {
  const projects = [
    {
      title: "Web based Expense Management System",
      duration: "Jun 2020 - May 2021",
      desc: "Responsive Web Application developed for Sri Sathya Sai Sanjeevani Hospital that functions as a Multi-level Expense Approval System where various stakeholders can approve/reject various expenditures. Authentication is done through OTP-based login.This helps simplify the approval of the expenses incurred during various flagship events like medical camps, blood donation drives etc.",
      github: "https://github.com/akshith312/Approval-system-1"
    },
    {
      title: "Facial Recognition Using Image Processing",
      duration: "Mar 2020",
      desc: " Project that detects person's face and displays the name, it is trained by using OpenCV Library",
      github: "https://github.com/akshith312/Approval-system-1"
    },
    {
      title: "Premier League Investment Analysis",
      duration: "Apr 2023",
      desc: "Analysis of Premier League Data to decide which Club is suitable for Investment. ",
      github: "https://github.com/akshith312/Premier-League-Investment-Analysis"
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card  key={index} className="card">
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {card.duration}
          </Card.Subtitle>
          <Card.Text>{card.desc}</Card.Text>
          <Card.Link href={card.github}>GitHub Link</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  return <div>{projects.map(renderCard)}</div>;
};
