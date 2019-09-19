import React from 'react';
import Main from '../../uikit/Main';
import P from '../../uikit/P';
import BackgroundContacts from '../../components/BackgroundImages/BackgroundContacts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contacts = () => (
  <div>
    <BackgroundContacts>
      <Navbar />
    </BackgroundContacts>
    <Main>
      <div>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          scelerisque nunc, id auctor massa. Fusce bibendum, libero at fermentum
          efficitur, nibh magna laoreet metus, non placerat odio nisl ac lectus.
          Sed molestie tincidunt dapibus. Etiam eleifend porttitor velit sed
          hendrerit. Pellentesque suscipit nibh eu molestie blandit. Mauris ac
          sollicitudin nisl. Maecenas sed eleifend augue, eget tincidunt leo.
          Donec auctor felis aliquet, auctor augue at, rutrum nibh. Nulla
          aliquam nulla in ultrices interdum. Nulla ornare nisi eget tempus
          ullamcorper. Fusce hendrerit libero a tellus blandit condimentum.
          Donec rutrum tellus eu lacus elementum, gravida elementum ex varius.
          Proin viverra nulla vitae ex tempus malesuada. Maecenas ultrices nulla
          sed dui facilisis, laoreet porta enim pulvinar.
        </P>
        <P>
          Phasellus enim est, hendrerit ut pellentesque luctus, eleifend in
          felis. Donec venenatis ligula nisi, sit amet faucibus lectus sagittis
          et. Morbi iaculis, erat quis molestie commodo, erat metus accumsan
          tellus, vitae egestas diam urna et erat. Integer id felis aliquet,
          tempus sem at, vulputate magna. Curabitur vel erat a libero rutrum
          gravida at non purus. Donec egestas ligula a dapibus iaculis. In
          rutrum turpis eu neque maximus fringilla. In hac habitasse platea
          dictumst.
        </P>
      </div>
    </Main>
    <Footer />
  </div>
);

export default Contacts;
