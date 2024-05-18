import React from "react";
import data from "./DataCallForPaper";
import TrackInfo from "./TrackInfo";

function CallForPaper() {
  return (
    <div className="callForPaperContainer">
      <h1>Call for Papers</h1>
      <p>
        INDIACom-2025 is aimed to invite original research papers in the field
        of, primarily, Computer Science and Information Technology and,
        generally, all interdisciplinary streams of Engineering Sciences, having
        central focus on sustainable computing applications, which may be of use
        in enhancing the quality of human life and contribute effectively to
        realize the nations' vision of sustainable inclusive development using
        Computing. INDIACom-2025 will be an amalgamation of four different
        Tracks organized parallel to each other as listed below:-
      </p>
      <TrackInfo/>
      <p>
        INDIACom-2025 will be held at Bharati Vidyapeeth, New Delhi (INDIA). The
        conference will provide a platform for technical exchanges within the
        research community and will encompass regular paper presentation
        sessions, invited talks, key note addresses, panel discussions and
        poster exhibitions. In addition, the participants will be treated to a
        series of cultural activities, receptions and networking to establish
        new connections and foster everlasting friendship among fellow
        counterparts. The conference will also provide opportunity to the
        participants to visit some of the world’s famous tourist places in Delhi
        like Qutub Minar, Red Forte, Akshardham Temple, Lotus Temple, Jantar
        Mantar and Taj Mahal at Agra (around 200 KM from Delhi). Full length
        original and unpublished research papers based on theoretical or
        experimental contributions related to the following topics, but not
        limited to, are solicited for presentation and publication in the
        conference:-
      </p>
      <div className="paperTopics">
        <div>
          <ul>
            {data[0].map((i, index) => (
              <li className="cfp_li" key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {data[1].map((i, index) => (
              <li className="cfp_li" key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {data[2].map((i, index) => (
              <li className="cfp_li" key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h1 className="cfp_heading">Paper Submission</h1>
      <p>
        Authors from across different parts of the world are invited to submit
        their papers. Authors wishing to submit their papers must refer to the
        website, for paper structuring and formatting guidelines in detail, at
        Technical Guidelines. Authors should submit their papers online at
        Submit Paper. Unregistered authors should first create an account on Add
        Member to log on and submit paper. Only electronic submissions will be
        considered. Papers submitted by e-mail will not be considered.
      </p>
      <h1 className="cfp_heading">Review Process, Publication and Indexing</h1>
      <p className="cfp_p">
        The conference aims at carrying out two rounds of review process. In the
        first round, the papers submitted by the authors will be assessed on the
        basis of their technical suitability, scope of work and plagiarism. The
        corresponding authors of qualifying submissions will be intimated for
        their papers to be double blind reviewed by three experts on the basis
        of originality, novelty, clarity, completeness, relevance, significance
        and research contribution. The shortlisted papers of all the tracks will
        be accepted for presentation and publication in the Soft Copy of
        Conference proceedings, on the website. <span>INDIACom-2025</span> has
        applied for
        <span>IEEE's Conference Publication Program.</span> This means that all
        papers presented during the conference will be submitted for possible
        consideration and inclusion in{" "}
        <span className="cfp_span_red">IEEE Xplore</span> subject to their own
        quality check for publication and indexing, which is indexed with
        world's leading <span>Abstracting & Indexing (A&I)</span> databases,
        including{" "}
        <span className="cfp_span_red">
          ISI, SCOPUS, DBLP, EI-Compendex, Google Scholar,
        </span>{" "}
        etc. Extended version of the selected papers will also be recommended to
        be published in the following Journals:-
      </p>
      <div className="cfp_ol">
        <ol className="ol_li">
          <li>
            <span>International Journal of Information Technology (BJIT)</span>,
            ISSN: 2511-2104 (Print Version); ISSN: 2511-2112 (Electronic
            Version), published by{" "}
            <span className="cfp_span_red">Springer Nature</span>, indexed at{" "}
            <span className="cfp_span_red">
              SCOPUS, DBLP, INSPEC, CNKI, OCLC, Google Scholar,
            </span>{" "}
            etc. and enlisted in the UGC List of approved Journals. Details of
            which is available at
            <a href="https://www.editorialmanager.com/BJIT/default.aspx.">
              https://www.editorialmanager.com/BJIT/default.aspx.
            </a>
          </li>
          <li>
            <span>Wireless Communications and Mobile Computing</span>, ISSN -
            1530-8669, published by Hindawi. Indexed at{" "}
            <span className="cfp_span_red">
              Web of Science, Scopus, SCIE, JCR,
            </span>
            etc. having its <span className="cfp_span_red">Impact Factor</span>{" "}
            as <span className="cfp_span_red">1.899</span> for 2016 (JCR), etc.
            Details of which is available at
            <a href="https://www.hindawi.com/journals/wcmc/.">
              https://www.hindawi.com/journals/wcmc/.
            </a>
          </li>
          <li>
            <span>
              International Journal of Ambient Computing and Intelligence
              (IJACI),
            </span>
            ISSN - 1941-6237. Indexed by{" "}
            <span className="cfp_span_red">
              Clarivate, SCOPUS, EI Compendex, etc.
            </span>
            Details of which is available at
            <a href="http://www.igi-global.com/journal/international-journal-ambient-computing-intelligence/1110.">
              http://www.igi-global.com/journal/international-journal-ambient-computing-intelligence/1110.
            </a>
          </li>
          <li>
            <span>Advances in Multimedia</span>, ISSN - 1687-5680, published by
            Hindawi. Indexed at{" "}
            <span className="cfp_span_red">
              Web of Science, Scopus, ACM DL, DBLP, INSPEC,
            </span>{" "}
            etc. Details of which is available at
            <a href="https://www.hindawi.com/journals/am/.">
              https://www.hindawi.com/journals/am/.
            </a>
          </li>
          <li>
            <span>Network Protocols and Algorithms,</span> ISSN - 1943-3581.
            Indexed at{" "}
            <span className="cfp_span_red">ACM DL, DBLP, INSPEC,</span> etc.
            Details of which is available at
            <a href="http://www.macrothink.org/journal/index.php/npa/index.">
              http://www.macrothink.org/journal/index.php/npa/index.
            </a>
          </li>
          <li>
            <span>
              Australian Journal of Intelligent Information Processing Systems,
            </span>
            ISSN 1321-2133. Indexed at{" "}
            <span className="cfp_span_red">
              INSPEC, Ranked B by Australian Government.
            </span>{" "}
            Details of which is available at
            <a href="http://vbn.aau.dk/en/journals/australian-journal-of-intelligent-information-processing-systems(f2434c66-2cbd-4f94-8130-6f81d787ac93)/publications.html">
              http://vbn.aau.dk/en/journals/australian-journal-of-intelligent-information-processing-systems(f2434c66-2cbd-4f94-8130-6f81d787ac93)/publications.html
            </a>
          </li>
          <li>
            <span>International Journal of Synthetic Emotions (IJSE),</span>{" "}
            ISSN - 1947-9093. Indexed by{" "}
            <span className="cfp_span_red">ACM DL, DBLP,</span> etc. Details of
            which is available at
            <a href="http://www.igi-global.com/journal/international-journal-synthetic-emotions-ijse/1144.">
              http://www.igi-global.com/journal/international-journal-synthetic-emotions-ijse/1144.
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default CallForPaper;
