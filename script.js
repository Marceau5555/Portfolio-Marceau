const skills = document.querySelectorAll("#skills li");

skills.forEach((skill, index) => {

  setTimeout(() => {
    skill.classList.add("show");
  }, index * 200);

});
