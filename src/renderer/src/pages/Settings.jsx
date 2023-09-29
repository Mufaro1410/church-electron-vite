import Users from '../components/Users';
import Membership from '../components/Membership';
import MaritalStatus from '../components/MaritalStatus';
import Society from '../components/Society';
import Section from '../components/Section';
import AddMembers from '../components/AddMembers';

export default function Settings() {
  return (
    <div>
      <Users />
      <Membership />
      <MaritalStatus />
      <Society />
      <Section />
      <AddMembers />
    </div>
  );
}
