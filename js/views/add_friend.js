function addFriendTemplate (data) {
  return `

    <div class="add-friend">
      <h3>Add Friend</h3>
      <form>
        <label>Name: <input type="text" class="name"</label><br>
        <label>Email: <input type="text" class="email"</label><br>
        <label>Phone Number: <input type="text" class="phone"</label><br>
        <label>Location: <input type="text" class="location"</label><br>
      </form>
      <button class="save-button" data-to>Save</button>
    </div>

  `;
}

export default addFriendTemplate;