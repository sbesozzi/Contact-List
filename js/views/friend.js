function friendTemplate(data) {
  return `

    <ul class="friend">
      <li class="photo">
        <p class="back-button" data-to><i class='fa fa-arrow-left'></i></p>
        <div class="friend-image">
          <img src="http://www.wesleyan.edu/molbiophys/Trainees/default-profile.png">
        </div>
        </li>
      <li><i class='fa fa-user'></i>  ${data.Name}</li>
      <li><i class='fa fa-envelope'></i>  ${data.Email}</li>
      <li><i class='fa fa-phone-square'></i>  ${data.Phone}</li>
      <li><i class='fa fa-globe'></i>  ${data.Location}</li>
    </ul>

  `;
}

export default friendTemplate;