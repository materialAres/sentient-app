export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-300 p-4 mt-5 text-xs text-gray-800">
      <div className="footer-content">
        <h3 className="text-sm text-red-800 font-bold mb-2">
          About the Creator
        </h3>
        <p className="mb-2.5 leading-snug">
          <span className="font-bold">Sarah Moonwhisper</span><br />
          Wellness guide, meditation teacher, and gentle soul on a mission to help 
          others find their inner light. Sarah has been practicing mindfulness for 
          over a decade and believes that everyone deserves peace, joy, and 
          self-compassion in their daily lives.
        </p>
        
        <div className="my-4">
          <h4 className="text-xs text-blue-800 font-bold mb-1">Get Connected</h4>
          <a href="/contact" className="vintage-link mx-1">Contact Me</a> | 
          <a href="/newsletter" className="vintage-link mx-1">Email Updates</a> | 
          <a href="/guestbook" className="vintage-link mx-1">Sign My Guestbook</a>
        </div>
        
        <div className="text-center mt-4 pt-2.5 border-t border-dotted border-gray-300 text-gray-600 text-xs">
          <p>© 2004 Shine.com - Spreading light since 200X</p>
        </div>
      </div>
    </footer>
  )
}
