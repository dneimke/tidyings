// ask Copilot to '/tidy' the following snippets of code

export function nestedClauseExample(data: Data) {
  if (data) {
    if (data.isValid) {
      return true;
    }
  }
}

function nestedClauseExample2(
  input: string | null,
  minLength: number,
  maxLength: number
): string | null {
  if (input !== null) {
    if (input.length >= minLength) {
      if (input.length <= maxLength) {
        return input.trim();
      } else {
        console.error("Input exceeds maximum length.");
        return null;
      }
    } else {
      console.error("Input is too short.");
      return null;
    }
  } else {
    console.error("Input is null.");
    return null;
  }
}

interface User {
  profile?: {
    address?: {
      city?: string;
    };
  };
}

function objectPropertyChecks(user: User): string | undefined {
  if (user.profile) {
    if (user.profile.address) {
      if (user.profile.address.city) {
        return user.profile.address.city;
      }
    }
  }
  return undefined;
}

function processUserInput(
  input: string | null,
  minLength: number,
  maxLength: number
): string | null {
  if (input !== null) {
    if (input.length >= minLength) {
      if (input.length <= maxLength) {
        return input.trim();
      } else {
        console.error("Input exceeds maximum length.");
        return null;
      }
    } else {
      console.error("Input is too short.");
      return null;
    }
  } else {
    console.error("Input is null.");
    return null;
  }
}

interface User {
  profile?: {
    address?: {
      city?: string;
    };
  };
}

function getCity(user: User): string | undefined {
  if (user.profile) {
    if (user.profile.address) {
      if (user.profile.address.city) {
        return user.profile.address.city;
      }
    }
  }
  return undefined;
}

enum ProcessingState {
  Pending,
  Processing,
  Completed,
  Error,
}

function handleProcessing(state: ProcessingState, data: any): void {
  if (state === ProcessingState.Processing) {
    if (data) {
      if (data.isValid) {
        // Perform processing logic
        console.log("Processing valid data");
      } else {
        console.error("Invalid data for processing.");
      }
    } else {
      console.error("No data provided for processing.");
    }
  } else {
    console.log("Processing not started.");
  }
}

function calculateArea(width?: number, height?: number): number | null {
  if (width !== undefined) {
    if (height !== undefined) {
      if (width > 0 && height > 0) {
        return width * height;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}
