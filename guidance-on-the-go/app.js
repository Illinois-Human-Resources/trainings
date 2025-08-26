const courseGrid = document.querySelector(".course-grid");

courses.forEach(course => {
  const article = document.createElement("article");
  article.className = "course-card";

  article.innerHTML = `
    <div class="course-image"></div>
    <div class="course-content">
      <h2 class="course-title">${course.title}</h2>
      <p class="course-description">${course.description}</p>
      <div class="course-meta">
        <div class="meta-item">
          <span>${course.audience}</span> | 
          <time datetime="${course.duration}">${course.durationText}</time>
        </div>
      </div>
      <a href="${course.link}" class="course-btn">View details</a>
    </div>
  `;

  courseGrid.appendChild(article);
});