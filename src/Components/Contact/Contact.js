import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.scss";

const varients = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [sendername, setSendername] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  let templateParams = {
    name: sendername,
    email: senderEmail,
    message: senderMessage,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xoacndy",
        "template_2t4535t",
        templateParams,
        "SXvVR-qfaxifV3sTH"
      )
      .then(
        (result) => {
          toast.success(result.text);

          setSenderEmail("");
          setSenderMessage("");
          setSendername("");
        },
        (error) => {
          toast.error(error.text);

          setSenderEmail("");
          setSenderMessage("");
          setSendername("");
        }
      );
  };

  return (
    <motion.div
      className="Contact"
      variants={varients}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="wrapper">
        <motion.div className="textContainer" variants={varients}>
          <h1>Let's work together</h1>
          <motion.div variants={varients}>
            <h2>Mail</h2>
            <p>xyz@gmail.com</p>
          </motion.div>
          <motion.div variants={varients}>
            <h2>Address</h2>
            <p>xyz@gmail.com</p>
          </motion.div>
          <motion.div variants={varients}>
            <h2>Phone</h2>
            <p>+91 987-654-3210</p>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="svgContainer"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            {/* <?xml version="1.0" encoding="iso-8859-1"?> */}
            <svg
              fill="transparent"
              height="350px"
              width="350px"
              version="1.1"
              id="Layer_1"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              //   xml:space="preserve"
            >
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M244.364,139.636c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636
			c19.782,0,34.909,15.127,34.909,34.909c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636
			C302.545,165.236,276.945,139.636,244.364,139.636z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M244.364,69.818c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636
			c58.182,0,104.727,46.545,104.727,104.727c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636
			C372.364,126.836,315.345,69.818,244.364,69.818z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M244.364,0c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636c96.582,0,174.545,77.964,174.545,174.545
			c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636C442.182,88.436,353.745,0,244.364,0z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M442.182,360.727v-26.764c0-19.782-15.127-34.909-34.909-34.909h-6.982c-27.927,0-55.855-4.655-81.455-12.8
			c-15.127-4.655-31.418,1.164-40.727,13.964l-10.473,17.455c-3.491,4.655-10.473,6.982-15.127,4.655
			c-57.018-30.255-102.4-75.636-132.655-132.655c-2.327-5.818-1.164-11.636,4.655-15.127l17.455-10.473
			c13.964-8.146,19.782-25.6,13.964-40.727c-9.309-26.764-12.8-53.527-12.8-81.455v-6.982C143.127,15.127,128,0,108.218,0H58.182
			C25.6,0,0,25.6,0,58.182c0,211.782,172.218,384,384,384c13.964,0,27.927-4.655,38.4-15.127c4.655-4.655,5.818-11.636,1.164-16.291
			c-4.655-4.655-11.636-5.818-16.291-1.164c-5.818,5.818-15.127,8.145-23.273,8.145C185.018,418.909,23.273,257.164,23.273,58.182
			c0-19.782,15.127-34.909,34.909-34.909h11.636v23.273c0,30.255,3.491,60.509,11.636,89.6c1.164,4.655,5.818,8.145,11.636,8.145
			c1.164,0,2.327,0,3.491,0c5.818-1.164,9.309-8.145,8.145-13.964c-8.145-26.764-11.636-55.855-11.636-83.782V23.273h15.127
			c6.982,0,11.636,4.655,11.636,11.636v6.982c0,30.255,4.655,60.509,13.964,88.436c1.164,4.655,0,10.473-4.655,13.964
			l-17.455,10.473c-15.127,9.309-20.945,30.255-12.8,46.545c32.582,60.509,81.455,109.382,141.964,141.964
			c16.291,8.145,36.073,3.491,46.545-12.8l10.473-17.455c2.327-4.655,8.145-6.982,13.964-4.655
			c29.091,9.309,58.182,13.964,88.436,13.964h6.982c6.982,0,11.636,4.655,11.636,11.636v26.764h-23.273
			c-27.927,0-57.018-3.491-83.782-11.636c-5.818-1.164-12.8,2.327-13.964,8.145c-1.164,5.818,2.327,12.8,8.145,13.964
			c29.091,8.146,59.345,11.636,89.6,11.636h34.909h5.818c29.091,0,52.364,23.273,52.364,52.364
			c0,29.091-23.273,53.527-52.364,53.527H186.182c-29.091,0-52.364-23.273-52.364-52.364c0-41.891-33.745-75.636-75.636-75.636
			c-6.982,0-11.636,4.655-11.636,11.636S51.2,384,58.182,384c29.091,0,52.364,23.273,52.364,52.364
			c0,41.891,33.745,75.636,75.636,75.636h250.182C478.255,512,512,478.255,512,436.364C512,396.8,481.745,364.218,442.182,360.727z"
                  />
                </g>
              </g>
            </svg>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              value={sendername}
              onChange={(e) => setSendername(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
            <ToastContainer />
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
