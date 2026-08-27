type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  featured?: boolean
};

const ProfileCard = ({name, price, category}: ProductCardProps) => {
  return (
    <>
    <section>
      <h2>name: {name}</h2>
      <p>price: {price}</p>
      <p> Category: {category}</p>
    </section>
    </>
    );
}
export default ProfileCard
