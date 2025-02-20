import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="container">
          <header>
            <nav>
              <ul>
                <li>
                  <Link href="#about">About Me</Link>
                </li>
                <li>
                  <Link href="#skills">Skills</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <p>&copy; 2025 [Your Name]. All rights reserved.</p>
            <p>
              Contact: <a href="mailto:your.email@example.com">dm@gimal.com</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
