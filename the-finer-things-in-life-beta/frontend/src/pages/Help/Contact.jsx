import { redirect, Form, useActionData } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  };
  console.log(submission);

  // send post request

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 characters long" };
  }

  //redirect the user
  return redirect("/");
};

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <div className="container">
        <div className="info-wrap">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, Tallahassee, Fla 32301</p>
                </div>
              </div>
            </div>
            {/* // end info item */}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone-x-fill flex-shrink-0"></i>
                <div>
                  <h3>
                    Call
                    <br />
                  </h3>
                  <p>+1 850 666 4545</p>
                </div>
              </div>
            </div>
            {/* // end info item */}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
              <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>info@gmail.com.com</p>
                </div>
              </div>
            </div>
            {/* // end info item */}
          </div>
        </div>
        {/* bi bi-envelope flex-shrink-0 */}

        <Form action="" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="col-md-12">
              <textarea
                className="form-control"
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
              <button type="submit" className="sub">
                Submit
              </button>
              {data && data.error && <p>{data.error}</p>}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Contact;
