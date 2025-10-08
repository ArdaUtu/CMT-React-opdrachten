
const HeaderList = ({ Home, Contact, AboutUs }) => {
  return (
<section className ="Header-list">
<ul>
  <li><a href="Home.asp">{Home}</a></li>
  <li><a href="Contact.asp">{Contact}</a></li>
  <li><a href="Aboutus.asp">{AboutUs}</a></li>
</ul>
</section>
  );
};

export default HeaderList;