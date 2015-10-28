function processData(data) {
  console.log(data);
  return data.map(function(item) {
    return`
      <li class="friend-list-item" data-friend-id="${item.objectId}">
      <span>${item.Name}</span>
      </li>
      `;

  }).join('');
}

function friendsTemplate(data) {
  console.log('friends template');
  return `
    <div class="friends-list">
      <h3>Contact List</h3>
      <ul>${processData(data)}</ul>
    </div>
  `;
}

export default friendsTemplate;