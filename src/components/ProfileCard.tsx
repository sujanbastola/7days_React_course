const ProfileCard = () => {
  const name = "sujan bastola";
  const role = "React Learner";
  const isLearning = true;

  return (
    <>
    <section>
      <h2>name: {name}</h2>
      <p>{role}</p>
      <p> now: {isLearning ? "Online" : "offline"}</p>
    </section>
    </>
    );
}
export default ProfileCard
