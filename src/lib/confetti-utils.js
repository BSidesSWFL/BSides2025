/**
 * Confetti utility functions
 */

/**
 * Trigger confetti from left and right sides
 * @param {Object} confetti - The canvas-confetti library instance
 */
export function triggerConfetti(confetti) {
  // Left side confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0, y: 0.5 },
    colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
  });
  
  // Right side confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 1, y: 0.5 },
    colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
  });
}

