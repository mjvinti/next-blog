function handler(req, res) {
  const {
    body: { email, message, name },
    method,
  } = req;

  if (method === "POST") {
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input." });
    }

    console.log({ email, message, name });

    // store in a database
    return res.status(201).json({ message: "Successfully stored message!" });
  }
}

export default handler;
