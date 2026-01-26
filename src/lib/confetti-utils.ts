import type { CreateTypes } from 'canvas-confetti';

/**
 * Trigger confetti from left and right sides
 */
export function triggerConfetti(confetti: CreateTypes): void {
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
