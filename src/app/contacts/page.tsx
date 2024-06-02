import OurCoordinates from '@/components/Contacts/OurCoordinates/OurCoordinates';
import AdminContacts from '@/components/Contacts/AdminContacts/AdminContacts';
import DepartmentContacts from '@/components/Contacts/DepartmentContacts/DepartmentContacts';
import Footer from '@/components/Footer/Footer';
const ContactsPage = () => {
  return (
    <section>
      <div className="pl-3 pr-3">
        <OurCoordinates />
        <AdminContacts />
        <DepartmentContacts />
        <Footer />
      </div>
    </section>
  );
};

export default ContactsPage;
