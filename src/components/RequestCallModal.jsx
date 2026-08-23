function RequestCall({ request, closeRequest }) {
  return (
    <div className="fixed inset-0 z-52 flex items-center justify-center">
      <div onClick={closeRequest} className="fixed inset-0 bg-black/50" />
      <div></div>
    </div>
  );
}
export default RequestCall;
