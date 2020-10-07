/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class is used as a wrapper for Google Assistant Canvas Action class
 * along with its callbacks.
 */
export class Action {
  /**
   * @param  {Phaser.Scene} scene which serves as a container of all visual
   * and audio elements.
   */
  constructor(scene) {
    this.canvas = window.interactiveCanvas;
    this.gameScene = scene;
    this.commands = {
      START_GAME: (params) => {
        this.gameScene.start();
      },
      CORRECT_ANSWER: (params) => {
        this.gameScene.correctAnswer(params);
      },
      INCORRECT_ANSWER: (params) => {
        this.gameScene.incorrectAnswer();
      },
      WIN_GAME: (params) => {
        this.gameScene.winGame(params);
      },
      LOSE_GAME: (params) => {
        this.gameScene.loseGame();
      },
      PLAY_AGAIN: (params) => {
        this.gameScene.start();
      },
    };
  }

  /**
   * Register all callbacks used by the Interactive Canvas Action
   * executed during game creation time.
   */
  setCallbacks() {
    // Declare the Interactive Canvas action callbacks.
    const callbacks = {
      onUpdate: (data) => {
        try {
          const dataEntry = data[0];
          const command = dataEntry.command ? dataEntry.command :
            dataEntry.google ? dataEntry.google.intent.name : null;
          const params = dataEntry.displayedWord ? dataEntry.displayedWord : null;
          this.commands[command.toUpperCase()](params);
        } catch (e) {
          // do nothing, when no command is sent or found
        }
      }
    };
    // Called by the Interactive Canvas web app once web app has loaded to
    // register callbacks.
    this.canvas.ready(callbacks);
  }
}
