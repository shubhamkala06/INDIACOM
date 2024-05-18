import { tracks } from "../Resources/data/Datatracks";

const Conference = () => {
  return (
    <div>
      <h1 className="contact-heading">Conference Secretariat</h1>
      <p className="contact-p">Important Contacts for Authors / Delegates</p>
      <table>
        <thead>
          <tr>
            <th className="contact-h1">Track ID</th>
            <th className="contact-h2">Track Name</th>
            <th className="contact-h3">Incharge</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td className="contact-id">{track.id}</td>
              <td className="contact-name">{track.name}</td>
              <td className="contact-incharge">
                <span className="contact-span-name">{track.incharge.name}</span>
                <br />
                E-Mail: {track.incharge.contact.email}
                , indiacom2024@bvicam.in, conference@bvicam.ac.in;
                <br />
                Tel.: {track.incharge.contact.tel}
                <br />
                Mobile: {track.incharge.contact.mobile}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="contact-p">
        All correspondences related to the conference, including registration
        forms, DDs etc.(if required to be sent) must be sent by speed post with
        the caption "INDIACom-2023" at the top centre of the envelope, to the
        following address: -
      </p>
      <ul className="contact-ul">
        <li>Prof. M. N. Hoda</li>
        <li>General Chair, INDIACom-2023</li>
        <li>
          Director, Bharati Vidyapeeth's Institute of Computer Applications and
          Management (BVICAM)
        </li>
        <li>A-4, Paschim Vihar, Rohtak Road, New Delhi - 110063 (INDIA)</li>
        <li>
          Tel.:+ 91-11-25275055 Fax:+ 91-11-25255056 Mobile: +91-9212022066
        </li>
        <li>E-Mail: conference@bvicam.ac.in; mca.hoda@gmail.com</li>
      </ul>
    </div>
  );
};

export default Conference;