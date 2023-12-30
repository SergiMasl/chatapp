function Teams() {
  const teams = [
    {
      id: 1,
      title: "Project 1",
      lastUser: "A. Smith",
      date: "Jan 27",
      status: true,
    },
    {
      id: 2,
      title: "Project 2",
      lastUser: "F. Wong",
      date: "Jan 28",
      status: true,
    },
    {
      id: 3,
      title: "Project 3",
      lastUser: "Z. Zigler",
      date: "Jan 28",
      status: false,
    },
  ];
  return (
    <div className="teams-wrap">
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <a>
              <h3>{team.title}</h3>
              <div>
                <p>{team.lastUser}</p>
                <span>{team.date}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
