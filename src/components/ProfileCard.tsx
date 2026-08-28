type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  featured?: boolean
};

const ProfileCard = ({name, price, category, featured}: ProductCardProps) => {
  return (
    <>
    <section>
      <h2>name: {name}</h2>
      <p>price: {price} {featured && "*"}</p>
      <p> Category: {category}</p>
    </section>
    </>
    );
}
export default ProfileCard
