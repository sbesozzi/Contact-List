function addFriendTemplate (data) {
  return `

    <div class="add-friend">
      <h2>Add Friend</h2>
      <form>
        <label>Name: <input type="text" class="name"</label>
        <label>Email: <input type="text" class="email"</label>
        <label>Phone Number: <input type="text" class="phone"</label>
        <label>Location: <input type="text" class="location"</label>
      </form>
      <button class="save-button" data-to></button>
    </div>

  `;
}

export default addFriendTemplate;