export default {
  async fetch(request) {
    const destinationURL = "https://github.com/intGus";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
  },
};