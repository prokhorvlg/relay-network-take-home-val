import { mockWards } from "../../data/WardsMockData";
import { ISegment } from "../../interfaces/VoterData";
import { getSegmentByKey, getSegmentsFromWards, getTopSegmentFromSegments } from "./SegmentHelpers";

describe('getSegmentsFromWards', () => {
	let segments: ISegment[], totalSegment: ISegment | undefined
	beforeAll(() => {
		segments = getSegmentsFromWards(mockWards)
		totalSegment = getSegmentByKey("total", segments)
	})

	test('returns an expected total count', () => {
		expect(totalSegment).toBeDefined()
		if (totalSegment) {
			// In the mock data, total count is this value.
			expect(totalSegment.count).toBe(15)
		}
	})
	test('returns an expected count and percentage', () => {
		const repSegment = getSegmentByKey("rep", segments)
		expect(repSegment).toBeDefined()
		if (repSegment) {
			// In the mock data, republican segment is this value.
			expect(repSegment.count).toBe(4)
			expect(repSegment.percentage?.toFixed(2)).toBe("26.67")
		}
	})
})

describe('getSegmentByKey', () => {
	let segments: ISegment[]
	beforeAll(() => {
		segments = getSegmentsFromWards(mockWards)
	})

	test('returns an expected object', () => {
		const repSegment = getSegmentByKey("rep", segments)
		expect(repSegment).toBeDefined()
		if (repSegment) {
			// In the mock data, republican has this data.
			expect(repSegment.name).toBe("Republican")
		}
	})
})

describe('getTopSegmentFromSegments', () => {
	let segments: ISegment[]
	beforeAll(() => {
		segments = getSegmentsFromWards(mockWards)
	})

	test('returns the expected top segment key', () => {
		const topSegment = getTopSegmentFromSegments(segments)
		expect(topSegment).toBeDefined()
		if (topSegment) {
			// In the mock data, male has the highest total count.
			expect(topSegment).toStrictEqual("male")
		}
	})
})