export default function onError(error, res) {
  // console.log(error);

  if (error instanceof Error) {
    // res.status(500).send({ error: error.message });
    res.status(500).send({ error: error });
  } else {
    res.status(500).send({ error: "Unknown error" });
  }
}
