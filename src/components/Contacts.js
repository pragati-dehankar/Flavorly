const Contacts=()=>{
  return(
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contacts</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="name"/><br/>
        <input type="text" className="border border-black p-2 m-2" placeholder="msg"/><br/>
        <button className="border border-black p-2 m-2 bg-transparent rounded-lg">submit</button>
      </form>
    </div>
  );
};
export default Contacts;
