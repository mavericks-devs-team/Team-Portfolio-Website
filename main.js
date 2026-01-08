const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "350px";
glow.style.height = "350px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)";
glow.style.zIndex = "0";
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX - 175 + "px";
    glow.style.top = e.clientY - 175 + "px";
});
<script>
  (function () {
    emailjs.init("YOUR_PUBLIC_KEY");
  })();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.innerText = "Sending...";

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(
      () => {
        status.innerText = "Message sent successfully ✅";
        form.reset();
      },
      () => {
        status.innerText = "Failed to send ❌ Try again.";
      }
    );
  });
</script>
